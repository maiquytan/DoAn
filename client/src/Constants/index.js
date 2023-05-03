export const LINK = {
  nav: {
    main: [
      {
        name: 'home',
        url: '/',
      },
      {
        name: 'Shop now',
        url: '/shop',
      },
      {
        name: 'blog',
        url: '/blogspage',
      },
    ],
    profile: {
      name: 'My profile',
      url: '/profile',
    },
    favorite: {
      name: 'My favorite',
      url: '/favorite',
    },
  },
}

export const ORDER = {
  status: {
    'pending': { name: 'Chờ đóng hàng', style: 'pending' },
    'processing': { name: 'Đang vận chuyển', style: 'processing' },
    'shipped': { name: 'Đã nhận', style: 'shipped' },
    'delivered': { name: 'Bị hủy', style: 'delivered' },
  }
}

export const PRODUCT_CONSTANT = {
  size: {
    1: 'S',
    2: 'M',
    3: 'L',
    4: 'XL',
    5: 'XXL',
    6: 'XXXL',
    7: 'Free Size',
  }
}
