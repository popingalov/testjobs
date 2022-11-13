export default  function takeDifferenceTime(el: string): string {
    const date = new Date();
    const newDate = new Date(el);

    const difference = date.getTime() - newDate.getTime();
    const normalize = difference / 1000 / 60 / 60 / 24;

    if (normalize > 365) {
      const year = Math.floor(normalize / 365);
      const day = Math.floor(normalize - year * 365);

      return `Poseted ${year} ${year > 1 ? 'years' : 'year'} and 
                      ${day} ${day > 1 ? 'days' : 'day'} ago `;
    }

    return `Poseted ${normalize} ${normalize > 1 ? 'days' : 'day'} ago `;
  }
