export const randomPosterGenerator = (img) => {
    let random = Math.floor(Math.random() * (0 - (img?.length - 1)) + (img?.length - 1))
    return img[random]
}

export const ratingValueGenerator = (rating) => {
    let Arr = []
    let zero = []
    for (let i = 1; i <= rating; i++) {
        Arr.push(i)
    }

    for (let index = 1; index <= 5 - rating; index++) {
        zero.push(0)
    }

    return rating === 5 ? Arr : [...Arr, ...zero]
}