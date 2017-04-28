export default {
  props: {
    checkImage: 'http://iconshow.me/media/images/Mixed/small-n-flat-icon/png2/256/-sign-check.png',
    cardsImage: 'http://victoriorestaurant.com/wp-content/uploads/2014/06/credit-cards.png',
    cardOwnerEmail: 'email@coorpacademy.com',
    securedPaymentImage: 'http://simpleicon.com/wp-content/uploads/lock-2.png',
    stripeKeyPublic: 'key',
    errors: 'An error has occured',
    onSubscription() {},
    onCardNumberChange() {},
    cardNumberHasError: true,
    onCardExpiryChange() {},
    cardExpiryHasError: true,
    onCardCvcChange() {},
    cardCvcHasError: true,
    submitButtonEnabled: false,
    stripeInstance: () => {
        return {elements: () => {
          return {create: (elementName, elementOptions) => {
            return {
              on: (eventListend, eventHandler) => {},
              off: (eventListend, eventHandler) => {},
              mount: elementId => {},
              unmount: () => {}
            };
          }};
        }};
      }
  }
};
