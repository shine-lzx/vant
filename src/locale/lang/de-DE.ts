export default {
  name: 'Name',
  tel: 'Telefon',
  save: 'Speichern',
  confirm: 'Bestätigen',
  cancel: 'Abbrechen',
  delete: 'Löschen',
  complete: 'Complete',
  loading: 'Laden...',
  telEmpty: 'Bitte das Telefon ausfüllen',
  nameEmpty: 'Bitte den Name angeben',
  confirmDelete: 'Bist du sicher, dass du löschen möchtest?',
  telInvalid: 'Ungültige Telefonnummer',
  vanCalendar: {
    end: 'Ende',
    start: 'Start',
    title: 'Kalender',
    startEnd: 'Start/Ende',
    weekdays: ['So', 'Mo', 'Di', 'Mo', 'Do', 'Fr', 'Sa'],
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    rangePrompt: (maxRange: number) => `Wähle nicht mehr als ${maxRange} Tage`,
  },
  vanCascader: {
    select: 'Wählen',
  },
  vanContactCard: {
    addText: 'Kontaktinformationen hinzufügen',
  },
  vanContactList: {
    addText: 'Neuen Kontakt hinzufügen',
  },
  vanPagination: {
    prev: 'Vorherige',
    next: 'Nächste',
  },
  vanPullRefresh: {
    pulling: 'Zum Aktualisieren herunterziehen...',
    loosing: 'Loslassen zum Aktualisieren...',
  },
  vanSubmitBar: {
    label: 'Total：',
  },
  vanCoupon: {
    unlimited: 'Unbegrenzt',
    discount: (discount: number) => `${discount * 10}% Rabatt`,
    condition: (condition: number) => `Mindestens ${condition}`,
  },
  vanCouponCell: {
    title: 'Coupon',
    tips: 'Keine Coupons',
    count: (count: number) => `Du hast ${count} Coupons`,
  },
  vanCouponList: {
    empty: 'Keine Coupons',
    exchange: 'Austauschen',
    close: 'Schließen',
    enable: 'Verfügbar',
    disabled: 'Nicht verfügbar',
    placeholder: 'Couponcode',
  },
  vanAddressEdit: {
    area: 'Standort',
    postal: 'PLZ',
    areaEmpty: 'Bitte deinen Ort angeben',
    addressEmpty: 'Adresse darf nicht leer sein',
    postalEmpty: 'Falsche Postleitzahl',
    defaultAddress: 'Als Standardadresse festgelegen',
  },
  vanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse',
  },
  vanAddressList: {
    add: 'Neue Adresse hinzufügen',
  },
};
