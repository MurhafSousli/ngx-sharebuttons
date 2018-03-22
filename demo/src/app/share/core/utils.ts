/** Simple object check.*/
function isObject(item): boolean {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/** Deep merge two objects.*/
export function mergeDeep(target, ...sources) {
  if (!sources.length) {
    return target;
  }
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, {[key]: {}});
        }
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {[key]: source[key]});
      }
    }
  }

  return mergeDeep(target, ...sources);
}

/** Returns a readable number from share count */
export function shareCountFormatter(num: number, digits: number): string {

  const si = [
    {value: 1E9, symbol: 'B'},
    {value: 1E6, symbol: 'M'},
    {value: 1E3, symbol: 'K'}
  ], rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
    }
  }
  return num.toFixed(digits).replace(rx, '$1');
}

/** Copy text to clipboard */
export function copyToClipboard(text: string, ios: boolean) {
  return new Promise((resolve) => {

    // Create a hidden textarea element
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);

    // highlight textarea to copy the text
    if (ios) {
      const range = document.createRange();
      range.selectNodeContents(textArea);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.readOnly = true;
      textArea.setSelectionRange(0, 999999);
    } else {
      textArea.select();
    }
    document.execCommand('copy');
    document.body.removeChild(textArea);
    resolve();
  });
}
