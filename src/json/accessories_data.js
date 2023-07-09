const data = [
    {
        "id": 1,
        "name": "ของที่ระลึก จากภาพยนตร์ เรื่อง Spider-Man: Far from Home",
        "URL": "https://f.ptcdn.info/596/064/000/ptflmd21vmksmEDjWsaE-o.jpg",
        "price": 1100
    },
    {
        "id": 2,
        "name": "ของที่ระลึก จากภาพยนตร์ เรื่อง IT Chapter Two",
        "URL": "https://f.ptcdn.info/948/065/000/pxrdm0pf26SnWhpsKy7-o.jpg",
        "price": 550
    },
    {
        "id": 3,
        "name": "ของที่ระลึกจากหนัง “The Batman”",
        "URL": "https://jediyuth.files.wordpress.com/2022/03/batman-sweeptaker.jpg",
        "price": 700
    },
    {
        "id": 4,
        "name": "bucket set ชุด Transformers",
        "URL": "https://pbs.twimg.com/media/BqpXbCmCYAAkzOQ?format=jpg&name=medium",
        "price": 299
    },
    {
        "id": 5,
        "name": "EXCLUSIVE PREMIUM SET",
        "URL": "https://f.ptcdn.info/533/020/000/1403714298-1048630210-o.jpg",
        "price": 3200
    },
    {
        "id": 6,
        "name": "Happy Feet 2 Combo Set",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1324793233.jpg",
        "price": 169
    },
    {
        "id": 7,
        "name": "Lenticular Cup Happy Feet 2",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1324793321.jpg",
        "price": 169
    },
    {
        "id": 8,
        "name": "PPuss In Boots Combo Set",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1324793065.jpg",
        "price": 179
    },
    {
        "id": 9,
        "name": "The Twilight Saga Combo Set",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1324792982.jpg",
        "price": 159
    },
    {
        "id": 10,
        "name": "Halloween Theatre",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1324792935.jpg",
        "price": 179
    },
    {
        "id": 11,
        "name": "CARS 2",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1324792825.jpg",
        "price": 200
    },
    {
        "id": 12,
        "name": "Captain America",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1313464341.jpg",
        "price": 189
    },
    {
        "id": 13,
        "name": "The World of Widzard",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1313465887.jpg",
        "price": 179
    },
    {
        "id": 14,
        "name": "Kung Fu Panda 2",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1305213543.jpg",
        "price": 169
    },
    {
        "id": 15,
        "name": "Pirates4 Combo Set",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1313465887.jpg",
        "price": 169
    },
    {
        "id": 16,
        "name": "RIO (2011)",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1303303676.jpg",
        "price": 179
    },
    {
        "id": 17,
        "name": "The World of Widzard",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1313465887.jpg",
        "price": 179
    },
    {
        "id": 18,
        "name": "ของที่ระลึก จากภาพยนตร์ เรื่อง Birds of Prey",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1313465887.jpg",
        "price": 179
    },
    {
        "id": 19,
        "name": "Set A Hidden Blade Gift",
        "URL": "https://obs.line-scdn.net/r/ect/ect/image_1682405410447509618b5781823t11839f12",
        "price": 740
    },
    {
        "id": 20,
        "name": "The World of Widzard",
        "URL": "https://www.bloggang.com/data/lumsum/picture/1313465887.jpg",
        "price": 179
    },
    {
        "id": 21,
        "name": "ตุ๊กตา IT Chapter Two",
        "URL": "https://www.nangdee.com/games/ITChapterTwo/Premium/images/IT2_Nangdee.jpg",
        "price": 550
    },
    {
        "id": 22,
        "name": "Transformers 3D Glasses",
        "URL": "https://cartoon.mthai.com/app/uploads/2014/06/10372298_616634851768459_387720186956197499_n.jpg",
        "price": 249
    },
    {
        "id": 23,
        "name": "T-Shirt Transformers: Age of Extinction",
        "URL"   :"https://media.karousell.com/media/photos/products/2017/09/04/bt36_transformers_optimus_prime_age_of_extinction_black_timber_high_quality_silk_screen_collectable__1504527440_26f981f20",
        "price" :890
    },
    {
        "id": 24,
        "name": "แก้วน้ำจากภาพยนตร์ Thor: Ragnarok",
        "URL": "https://dy.lnwfile.com/_/dy/_raw/q8/aa/7m.jpg",
        "price": 350
    },
    {
        "id": 25,
        "name": "Mulan Combo Set",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t1.6435-9/118767943_3201519676563383_591045156317706251_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFhWzf97CQj3i5uh5FDq3b6F7TC9HAp96wXtML0cCn3rBjhd1H2ex_bemjPmUI19NoD3AqOsuqseehA57qYbv8K&_nc_ohc=QNkix2EvX7cAX8hsCTX&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfAuQ_6CalMljplDLDdztuVGnvbsJ1S_MbKoHGih_Ivwlw&oe=64D0A099",
        "price": 279
    },
    {
        "id": 26,
        "name": "Mission: Impossible - Dead Reckoning Part One COMBO SET",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/357739134_6279838535398133_8721809261308305651_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeFjLc2YaxqLiBF75BD3JvUJZ6aNIa7jJfZnpo0hruMl9sm-iaAd58yL14_10uI02qIAb9WqZyQM2NbREarSdYJv&_nc_ohc=T5iNRB6q1U0AX8TwHjS&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfDnA_PF1gxbMH9OmseqyomGI40TnET0vTKYSLiK4pI5rg&oe=64AEAAA2",
        "price": 459
    },
    {
        "id": 27,
        "name": "Double Wall Cup Set",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/358074584_6279837598731560_7126439682688201757_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeEPINJXwstn-GHU5QPbxVkyUPAstJWpLMpQ8Cy0laksyjLx2vsMSV6Apm-KDRISlFK_iCOxqMWAKWW-C3ZK9Xpm&_nc_ohc=PIy5bO4oywYAX-yPj1w&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfAjjwVQ2hcwDxu-z0s8-fmtfZehAcXqPAkgsW-nW6dgDA&oe=64AE6FE2",
        "price": 350
    },
    {
        "id": 28,
        "name": "INDIANA JONES COMBO SET",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/352957683_6235118266536827_1454830121659839182_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHQm5PiiyjrXYAWeZe9W5g9wGjucKLdXPHAaO5wot1c8ZWxdBMCBCzZNRuTUDM8U0FlqIbEIIiswQLEElEt7NN1&_nc_ohc=fDvfMsl32VUAX_9AqJX&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfB0jCITC7UuSRUQ8Eqti6F6IyOpi-DJF-SPWWqaAv4eKQ&oe=64AD9FDB",
        "price": 399
    },
    {
        "id": 29,
        "name": "Wall-E Bucket Set",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/353465854_6234895539892433_8101415425686192961_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHKiblheECkG_ugLJlEer5XsVIG1qLJU5GxUgbWoslTkdQAsRupJXQPKSzEpDImQPwb71cnOflFUmkFiKW4m1Sw&_nc_ohc=rBdHCXKKoAQAX--mF78&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfAbgzHNsPvedUackm2_j3DI9rPf836HWqv9u87vHyX8LQ&oe=64AEF04A",
        "price": 790
    },
    {
        "id": 30,
        "name": "Mike Wazowski Bucket Set",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/353465854_6234895539892433_8101415425686192961_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHKiblheECkG_ugLJlEer5XsVIG1qLJU5GxUgbWoslTkdQAsRupJXQPKSzEpDImQPwb71cnOflFUmkFiKW4m1Sw&_nc_ohc=rBdHCXKKoAQAX--mF78&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfAbgzHNsPvedUackm2_j3DI9rPf836HWqv9u87vHyX8LQ&oe=64AEF04A",
        "price": 690
    },
    {
        "id": 31,
        "name": "Remy Ratatouille Bucket Set",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/353465854_6234895539892433_8101415425686192961_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHKiblheECkG_ugLJlEer5XsVIG1qLJU5GxUgbWoslTkdQAsRupJXQPKSzEpDImQPwb71cnOflFUmkFiKW4m1Sw&_nc_ohc=rBdHCXKKoAQAX--mF78&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfAbgzHNsPvedUackm2_j3DI9rPf836HWqv9u87vHyX8LQ&oe=64AEF04A",
        "price": 790
    },
    {
        "id": 32,
        "name": "The Flash Tintub Movie Set",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/353635192_6216209641761023_1942300406421145548_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeGMAwcb-UDu58ltshASqK26Yrz6joPxLWxivPqOg_EtbHcRAxLMuNoME0FUfJLqyMj-PCw4ieP7uyBFuOP0IfP2&_nc_ohc=c1JKkX5ScqYAX8KP_mZ&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfAWolb_4QsrJ638qydCbQSez79RHaNWyv5Fu5xC5n_HJw&oe=64AEBB3F",
        "price": 390
    },
    {
        "id": 33,
        "name": "THE FLASH COMBO SET",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/351468697_6212299485485372_6979889073294438015_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeETDl2F05jaGuZg9aM-ZP4P4xzf1HNr9wDjHN_Uc2v3AH0WNYNMDjFbESrQLTIiR70RcKZYk2xf-F9gQpFJikOu&_nc_ohc=3Sn7KJCV13wAX8VgTEV&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfAygXnBGp2gqZwmeUrSthdQoJq_zEiTneySaiT4TvN_Rw&oe=64AF05EC",
        "price": 399
    },
    {
        "id": 34,
        "name": "OPTIMUS PRIME POPCORN CONTAINER",
        "URL": "https://scontent.fbkk25-1.fna.fbcdn.net/v/t39.30808-6/350691795_934483410997087_9112203589042786531_n.jpg?stp=dst-jpg_p526x296&_nc_cat=101&cb=99be929b-59f725be&ccb=1-7&_nc_sid=0debeb&_nc_eui2=AeHCQKesULzf7Tzi9A2JiH4_KLmyJDXERJwoubIkNcREnIj2lPhY3cQlIL3_MOgrxqt09Q4ztIdVOX8KuO6nW2qJ&_nc_ohc=YScsJouHvK0AX-4hv3f&_nc_ht=scontent.fbkk25-1.fna&oh=00_AfCn0XOPsxvLlxHslwQ0EJTlzi-qKQumxzmLNxjXPvX-tA&oe=64AD7A10",
        "price": 790
    },
]



 
export default data;