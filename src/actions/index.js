import { 
  NEXT_STEP,
  TITLE_OPTIONS,
  ADD_OPTIONS,
  DELETE_OPTIONS,
  ADD_ANSWER,
  RAITING_ANSWER,
  RESTART
} from '../constants'


export const nextStep = () => {
    return {
      type: NEXT_STEP    
    }  
}

export const titleOptions = (title, current) => {
  return {
    type: TITLE_OPTIONS,
    payload: {
      title,
      current
    }  
  }  
}

export const addOption = () => {
  return {
    type: ADD_OPTIONS  
  }  
}

export const deleteOption = id => {
  return {
    type: DELETE_OPTIONS,
    payload: {
      id
    }
  }  
}

export const addAnswer = (type, current) => {
  return {
    type: ADD_ANSWER,
    payload: {
      type,
      current
    }  
  }  
}

export const raitingAnswer = (indexAnswer, indexCard, indexSelected, type) => {
  return {
    type: RAITING_ANSWER,
    payload: {
      indexAnswer,
      indexCard,
      indexSelected,
      type, 
    }  
  }  
}


export const restart = () => {
  return {
    type: RESTART 
  }  
}

