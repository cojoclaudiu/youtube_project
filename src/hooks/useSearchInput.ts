import {
  useState,
  useCallback,
  useEffect,
  ChangeEvent,
  FocusEvent,
  FormEvent,
  MouseEvent,
} from 'react';
import { prediction } from 'helpers/searchPrediction';
import { useNavigate } from 'react-router-dom';
import { useDebounceValue } from './useDebounceValue';

const useSearchInput = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [visible, setVisible] = useState(false);
  const [debouncedInput] = useDebounceValue(input, 200);

  // When debounced input changes, fetch suggestions
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedInput) {
        const response = await prediction(debouncedInput);
        setSuggestions(response);
      }
    };

    fetchSuggestions();
  }, [debouncedInput]);

  const onInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }, []);

  const onInputSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      navigate(`/results?search_query=${input.replace(/ /g, '+')}`, { replace: true });
    },
    [input, navigate],
  );

  const onSelectedPredictionSubmit = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const selectedText = (e.target as HTMLElement).textContent || '';
      setInput(selectedText);
      navigate(`/results?search_query=${selectedText.replace(/ /g, '+')}`, { replace: true });
      setVisible(false);
    },
    [navigate],
  );

  const eventOnBlur = useCallback((e: FocusEvent<HTMLDivElement, Element>) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setVisible(false);
    }
  }, []);

  return {
    onSelectedPredictionSubmit,
    onInputSubmit,
    eventOnBlur,
    suggestions,
    visible,
    onInputChange,
    setVisible,
    input,
    setInput,
  };
};

export default useSearchInput;
