'use strict';

// Converts camel case string to a sentence case
export const formatCamelCaseString = text => {
  return text
     // insert a space between lower & upper
     .replace(/([a-z])([A-Z])/g, '$1 $2')
     // insert a space between lower & number
     .replace(/([a-z])([0-9])/g, '$1 $2')
     // space before last upper in a sequence followed by lower
     .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
     // uppercase the first character
     .replace(/^./, function(str){ return str.toUpperCase(); })
};

// Handles page navigation
export function handleOnPageNavigation(item){
this.setState({
    page: item.key
  });
}
