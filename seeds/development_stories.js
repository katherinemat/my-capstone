
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stories').del()
    .then(function () {
      // Inserts seed entries
      return knex('stories').insert([
        {
          id: 1,
          source: 'BBC',
          title: 'rowValue1',
          author: 'test author1',
          date: '01-01-1999',
          link: 'http://www.bbc.com/news/live/world-us-canada-40123293',
          img: 'https://ichef-1.bbci.co.uk/news/800/cpsprodpb/13CEA/production/_96303118_mediaitem96303117.jpg',
          content: 'The UN chief joins leaders of the EU and China in stressing the importance of the Paris agreement'
        },
        {
          id: 2,
          source: 'BBC',
          title: 'rowValue2',
          author: 'test author2',
          date: '01-01-1999',
          link: 'http://www.bbc.com/news/world-europe-40117209',
          img: 'https://ichef-1.bbci.co.uk/news/800/cpsprodpb/ABCB/production/_96297934_simfmemafp26dec.jpg',
          content: 'December\'s Black Sea crash that killed 92 happened after the pilot got disoriented, officials say.'
        },
        {
          id: 3,
          source: 'CNN',
          title: 'rowValue3',
          author: 'test author3',
          date: '09-09-2009',
          link: 'http://www.cnn.com/2017/06/01/politics/trump-latest-paris-climate/index.html',
          img: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170525125638-01-merkel-trump-nato-0525-medium-plus-169.jpg',
          content: 'President Donald Trump is set to announce his decision to withdraw the US from the Paris climate accord Thursday.'
        },
        {
          id: 4,
          source: 'CNN',
          title: 'rowValue4',
          author: 'test author4',
          date: '09-09-2009',
          link: 'http://www.cnn.com/2017/06/01/politics/sessions-russian-ambassador-letter/index.html',
          img: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170524191043-jeff-sessions-0512-medium-plus-169.jpg',
          content: 'A pair of Democratic senators asked then-FBI Director James Comey to investigate Attorney General Jeff Sessions, amid concerns that he may have had an additional meeting.'
        }
      ]);
    });
};
