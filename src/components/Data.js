import { v4 as uuid } from 'uuid';

const initialData = {
  contact: {
    name: 'Peter Parker',
    address: '20 Ingram St., Forest Hills, Queens, New York',
    phone: '(217) 555-1234',
    email: 'peterp@midtownhigh.org',
  },
  educationSet: [
    {
      key: uuid(),
      title: 'High School Diploma',
      subtitle: 'Midtown High School',
      startDate: '2008',
      endDate: '2020',
      bulletPoints: [{ key: uuid(), text: 'GPA: 3.92' }],
    },
  ],
  experienceSet: [
    {
      key: uuid(),
      title: 'City volunteer',
      subtitle: 'Queens, New York',
      startDate: '2016',
      endDate: 'present',
      bulletPoints: [
        {
          key: uuid(),
          text: 'Assisted NYPD by convincing criminals to report themselves',
        },
        {
          key: uuid(),
          text: 'Transported heavy objects for people in need',
        },
        {
          key: uuid(),
          text: 'Defeated threats of various natures',
        },
      ],
    },
    {
      key: uuid(),
      title: 'Photographer',
      subtitle: 'Manhattan, New York',
      startDate: '2017',
      endDate: 'present',
      bulletPoints: [
        {
          key: uuid(),
          text: 'Won 1st, 2nd and 3rd place in photography competition by capturing unique shots of Spider-Man, a local role-model superhero in NYC',
        },
        {
          key: uuid(),
          text: 'Took 30+ stunning close-up shots of spider-man',
        },
      ],
    },
    {
      key: uuid(),
      title: 'Delivery boy',
      subtitle: 'New York City',
      startDate: '2015',
      endDate: '2018',
      bulletPoints: [
        {
          key: uuid(),
          text: 'Won 7 awards for fastest delivery driver',
        },
        {
          key: uuid(),
          text: 'Set record high number of 64 deliveries per day',
        },
        {
          key: uuid(),
          text: 'Delivered 5000+ pizzas to customers either on my bike or another way',
        },
      ],
    },
  ],
};

function getBlankSectionItem() {
  return {
    key: uuid(),
    title: '',
    subtitle: '',
    startDate: '',
    endDate: '',
    bulletPoints: [],
  };
}

function getBlankBulletPoint() {
  return { key: uuid(), text: '' };
}

export { initialData, getBlankSectionItem, getBlankBulletPoint };

// If we make the program more flexible, this is how nested things can get.
// Is there a better way?
// sectionArray: []
//  section: {title, sectionItemArray}
//    sectionItemArray: []
//      sectionItem: {title, subtitle, startDate, endDate, bulletPoints}
//        bulletPoints: {marker, array},
//          array: [bp, bp],
//            bp: {key, text}
