export default {
  formatCurrency(number) {
    const standardFormat = new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    });

    const expandedFormat = new Intl.NumberFormat('nl-NL', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 4
    });

    if (standardFormat.format(number) === '€0') {
      return expandedFormat.format(number);
    }

    return standardFormat.format(number);
  },
  formatNumber(number) {
    return new Intl.NumberFormat().format(number);
  },
  isValuePositive(number) {
    return number > 0;
  }
}
