export const translations = {
  UA: {
    // Navigation & Menu
    back: 'Назад',
    githubRepo: 'Репозиторій',
    contactMe: 'Написати мені',
    adminPanel: 'Керування',
    logout: 'Вийти',

    // Info Modal
    infoDescription1:
      'Я постійно забував, хто вже заплатив мені за нашу з друзями сімейну підписку YouTube Premium, тому я створив невеликий сайт для вирішення цієї проблеми.',
    infoDescription2:
      'Цей сайт дозволяє мені керувати друзями в приватній панелі: додавати, оновлювати або видаляти їх. Та показувати всім публічно поточний статус платежу.',
    infoDescription3:
      'Я зробив його з React, styled-components, Supabase, а також спробував Framer Motion для анімацій та React Query для обробки даних. Це було в основному веселий спосіб попрактикуватися та вивчити нові інструменти. Ви можете переглянути деталі в цьому',
    githubRepository: 'GitHub репозиторії',

    // Admin Login
    loginToAdmin: 'Увійти в панель адміністратора',
    email: 'Електронна пошта',
    enterAdminEmail: 'Введіть email адміністратора',
    password: 'Пароль',
    enterAdminPassword: 'Введіть пароль адміністратора',
    login: 'Увійти',
    loginSuccessful: 'Вхід успішний',
    missingEmailOrPassword: 'Відсутній email або пароль',

    // Admin Navigation
    members: 'Учасники',
    boardSettings: 'Налаштування дошки',

    // Members Management
    activeMembers: 'Активні учасники',
    addMember: '+ Додати учасника',
    memberName: "Ім'я учасника",
    memberEmail: 'Email учасника',
    isMemberBillable: 'Чи потрібно платити учаснику?',
    dateUntilPaid: 'Дата до коли оплачено',
    selectDate: 'Вибрати дату',
    memberAvatar: 'Аватар учасника',
    addMemberButton: 'Додати учасника',
    creating: 'Створення...',
    updateMember: 'Оновити учасника',
    updating: 'Оновлення...',
    cancel: 'Скасувати',
    deleteMember: 'Видалити учасника',
    memberCreated: 'Учасника створено',
    memberUpdated: 'Учасника Оновлено',
    noMembers: 'Не має активних учасників',

    // Group Settings
    groupSettings: '⚙️Налаштування групи⚙️',
    groupName: 'Назва групи',
    membershipPrice: 'Ціна членства (грн)',
    owner: 'Власник',
    update: 'Оновити',
    groupSettingsUpdated: 'Налаштування групи оновлено',
    errorUpdatingGroup: 'Помилка оновлення групи',
    groupNameRequired: "Назва групи обов'язкова",
    membershipPricePositive: 'Ціна членства повинна бути позитивною',
    groupDataNotLoaded: 'Дані групи не завантажені',

    // Member Status & Board
    paidUntil: 'До',
    notSpecified: 'Не вказано',
    noNeedForPayments: '💲Не потрібно платити',
    paid: '✅ Сплачено',
    overdue: '🆘 Прострочено',
    expiringSoon: '⚠️ Закінчується',
    unknown: '❔Невідомо',

    // Delete Modal
    areYouAbsolutelySure: 'Ви абсолютно впевнені?',
    deleteConfirmation: 'Цю дію неможливо скасувати. Це назавжди видалить учасника та видалить його з бази даних.',
    memberDeleted: 'Учасника видалено',
    errorDeletingMember: 'Помилка видалення учасника',

    // Error Messages
    errorCreatingMember: 'Помилка створення учасника',
    errorUpdatingMember: 'Помилка оновлення учасника',
    errorGettingMemberData: 'Помилка отримання даних учасника',
    errorLoadingData: 'Помилка завантаження даних',
    errorAvatar: 'Файл завеликий (5МБ макс)',
    errorValidEmail: 'Введіть справжній email',
    errorNameEmail: 'Вкажіть імя та email',
    retry: 'Повторити',

    // Common
    loading: 'Завантаження...',
    error: 'Помилка',
    success: 'Успіх',
    month: 'на місяць',
    confirm: 'Підтвердити',
  },
  EN: {
    // Navigation & Menu
    back: 'Back',
    githubRepo: 'Github Repo',
    contactMe: 'Contact me',
    adminPanel: 'Admin Panel',
    logout: 'Logout',

    // Info Modal
    infoDescription1:
      'I always kept forgetting who already paid me for our friend group YouTube Premium family subscription, so I built a small app to solve that.',
    infoDescription2:
      'It lets me manage friends in a private dashboard: add, update, or remove them, while everyone can see the current payment status.',
    infoDescription3:
      'I made it with React, styled-components, Supabase, and also tried out Framer Motion for animations and React Query for handling data. It was mainly a fun way to practice and explore new tools. You can check out details on this',
    githubRepository: 'GitHub repository',

    // Admin Login
    loginToAdmin: 'Login to admin dashboard',
    email: 'Email',
    enterAdminEmail: 'Enter admin email',
    password: 'Password',
    enterAdminPassword: 'Enter admin password',
    login: 'Login',
    loginSuccessful: 'Login is successful',
    missingEmailOrPassword: 'Missing Email or Password',

    // Admin Navigation
    members: 'Members',
    boardSettings: 'Board Settings',

    // Members Management
    activeMembers: 'Active Members',
    addMember: '+ Add Member',
    memberName: 'Member Name',
    memberEmail: 'Member email',
    isMemberBillable: 'Is Member Billable?',
    dateUntilPaid: 'Date until paid',
    selectDate: 'Select Date',
    memberAvatar: 'Member Avatar',
    addMemberButton: 'Add Member',
    creating: 'Creating',
    updateMember: 'Update Member',
    updating: 'Updating',
    cancel: 'Cancel',
    deleteMember: 'Delete Member',
    memberCreated: 'Member Created',
    memberUpdated: 'Member Updated',
    noMembers: 'No Members Found',

    // Group Settings
    groupSettings: '⚙️Group Settings⚙️',
    groupName: 'Group Name',
    membershipPrice: 'Membership Price (UAH)',
    owner: 'Owner',
    update: 'Update',
    groupSettingsUpdated: 'Group Settings Updated',
    errorUpdatingGroup: 'Error updating group',
    groupNameRequired: 'Group name is required',
    membershipPricePositive: 'Membership price must be positive',
    groupDataNotLoaded: 'Group data not loaded',

    // Member Status & Board
    paidUntil: 'Paid untill',
    notSpecified: 'Not specified',
    noNeedForPayments: '💲No need for payments',
    paid: '✅ Paid',
    overdue: '🆘 Overdue',
    expiringSoon: '⚠️ Expiring Soon',
    unknown: '❔Unknown',

    // Delete Modal
    areYouAbsolutelySure: 'Are you absolutely sure?',
    deleteConfirmation:
      'This action cannot be undone. This will permanently delete member and remove it from database.',
    memberDeleted: 'Member deleted',
    errorDeletingMember: 'Error deleting member',

    // Error Messages
    errorCreatingMember: 'Error creating member',
    errorUpdatingMember: 'Error updating member',
    errorGettingMemberData: 'Error getting member data',
    errorLoadingData: 'Error loading data',
    errorAvatar: 'Avatar file is too large (max 5MB)',
    errorValidEmail: 'Please enter a valid email address',
    errorNameEmail: 'Please fill in name and email',
    retry: 'Retry',

    // Common
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    month: 'Month',
    confirm: 'Confirm',
  },
};

// Helper function to get translations
export const getTranslations = (lang: 'UA' | 'EN') => translations[lang];

// Helper function to get a specific translation
export const t = (lang: 'UA' | 'EN', key: keyof typeof translations.UA) => translations[lang][key];
