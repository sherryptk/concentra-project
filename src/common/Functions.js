'use strict';

// Converts camel case string to a sentence case
export const formatCamelCaseString = text => {
  return text;
};

// Handles page navigation
export function handleOnPageNavigation(item){
this.setState({
    page: item.key
  });
}
