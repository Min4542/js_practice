//객체의 중첩 구조
//게시글 데이터 

var articleList = {
    totalCount: 3670,
    admin: 'admin123',
    articles: [
        {
            bno: 3,
            title: '하하호호',
            writer: '둘리',
            view: 323
        },
        {
            bno: 2,
            title: '이이잉',
            writer: '고길동',
            view: 2000
        },
        {
            bno: 1,
            title: '커어어엌',
            writer: '또치',
            view: 2321
        }
    ]
};

console.log(articleList.articles[0]);
console.log(articleList.articles[1].title);