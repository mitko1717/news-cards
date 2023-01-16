let months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

export const getDate = (date: Date) => {
    let published = new Date(date)
    let yearNow = published.getFullYear();
    let monthNow = months[published.getMonth()];
    let dayNow = published.getDate();

    return `${monthNow + " " + dayNow+"th" + "," + " " + yearNow}`
}