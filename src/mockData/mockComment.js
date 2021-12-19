export const mockComment = [
    {
        id: 1,
        username: "Bagas23",
        email: "bagas345@gmail.com",
        like: 34,
        likeStatus: false,
        content: "Sangat Bermanfaat",
        subComment: [
            {
                id: 1,
                username: "farhanOye",
                content: "Hahahahaha",
                like: 55,
                likeStatus: true,
                created_at: "2021-12-09 12:00",
                updated_at: "2021-12-09 13:00"
            }
        ],
        created_at: "2021-12-09 11:00",
        updated_at: null
    },
    {
        id: 2,
        username: "Handi33",
        email: "handi22@gmail.com",
        like: 12,
        likeStatus: true,
        content: "Kurang Bermanfaat",
        subComment: [],
        created_at: "2021-12-18 10:00",
        updated_at: "2021-12-18 18:00"
    }
]