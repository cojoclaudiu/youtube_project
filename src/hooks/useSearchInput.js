import { useState, useEffect, useCallback, useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import debounce from 'lodash.debounce';
import prediction from 'helpers/searchPrediction';
import { HomeVideosContext } from 'context/HomeVideosContext';

const useSearchInput = () => {
  const history = useHistory();
  const { setKeyword } = useContext(HomeVideosContext);

  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [visible, setVisible] = useState(false);

  const eventOnBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setVisible((prev) => !prev);
    }
  };

  // SET INPUT ON CHANGE
  const onInputChange = useCallback(
    (e) => {
      e.preventDefault();
      setInput(e.target.value);
      setKeyword(e.target.value.toLowerCase());

      // GET PREDICTIONS
      const onTypeSuggest = async () => {
        const response = await prediction(input);
        setSuggestions(response);
      };

      onTypeSuggest();
    },
    [input, setKeyword],
  );

  // INPUT SUBMIT / BUTTON SUBMIT
  const onInputSubmit = (e) => {
    e.preventDefault();
    history.push(`results?search=${input}`);
  };

  // Debounce for search input
  const debouncedInputChanged = useMemo(() => debounce(onInputChange, 200), [onInputChange]);
  useEffect(() => () => debouncedInputChanged.cancel(), [debouncedInputChanged]);

  // ONSELECTED PREDICTION SUBMIT I WANT TO PUSH SELECTED ITEM INTO HISTORY ADDRESS
  // e prevent default on submit
  // I want to set the sugggestion if you click inside the input change suggestions
  const onSelectedPredictionSubmit = (e) => {
    e.preventDefault();
    history.push(`results?search=${e.target.textContent}`.replace(/ /g, '+'));
    setVisible((prev) => !prev);
  };

  return {
    onSelectedPredictionSubmit,
    onInputSubmit,
    eventOnBlur,
    suggestions,
    visible,
    debouncedInputChanged,
    setVisible,
    input,
  };
};

export default useSearchInput;
