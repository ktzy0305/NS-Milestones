import { Milestone } from "./classes/milestone.js"

var milestones = [
    new Milestone("1st Bookout 😍", new Date("Aug 28, 2020 09:00:00"), "timer-0001"),
    new Milestone("2nd Bookout 🔥", new Date("Sep 5, 2020 15:00:00"), "timer-0002"),
    new Milestone("1️⃣ Month", new Date("Sep 11, 2020 00:00:00"), "timer-0003"),
    new Milestone("3rd Bookout 😲", new Date("Sep 12, 2020 17:00:00"), "timer-0004"),
    new Milestone("4th Bookout 🙃", new Date("Sep 17, 2020 16:00:00"), "timer-0005"),
    new Milestone("5th Bookout 🥴", new Date("Sep 25, 2020 19:00:00"), "timer-0006"),
    new Milestone("6th Bookout 😢", new Date("Oct 2, 2020 21:00:00"), "timer-0007"),
    new Milestone("7th Bookout 😷", new Date("Oct 9, 2020 19:00:00"), "timer-0008"),
    new Milestone("2️⃣ Months", new Date("Oct 11, 2020 00:00:00"), "timer-0009"),
    new Milestone("8th Bookout 🤔", new Date("Oct 17, 2020 12:00:00"), "timer-0010"),
    new Milestone("9th Bookout 😵", new Date("Oct 23, 2020 13:00:00"), "timer-0011"),
    new Milestone("End Of Field Camp 🏋️", new Date("Nov 2, 2020 20:00:00"), "timer-0012"),
    new Milestone("10th Bookout 🤭", new Date("Nov 6, 2020 15:00:00"), "timer-0013"),
    new Milestone("3️⃣ Months", new Date("Nov 11, 2020 00:00:00"), "timer-0014"),
    new Milestone("11th Bookout 🤠", new Date("Nov 12, 2020 12:00:00"), "timer-0015"),
    new Milestone("12th Bookout 😏", new Date("Nov 20, 2020 14:00:00"), "timer-0016"),
    new Milestone("13th Bookout 🤗", new Date("Nov 27, 2020 16:00:00"), "timer-0017"),
    new Milestone("BMT Passing Out Parade 💪", new Date("Dec 4, 2020 05:30:00"), "timer-0018"),
    new Milestone("14th Bookout 🚢", new Date("Dec 4, 2020 11:00:00"), "timer-0019"),
    new Milestone("4️⃣ Months", new Date("Dec 11, 2020 00:00:00"), "timer-0020"),
    new Milestone("15th Bookout 👋🏼", new Date("Dec 18, 2020 17:30:00"), "timer-0021"),
    new Milestone("16th Bookout 🎅🏽", new Date("Dec 24, 2020 12:30:00"), "timer-0022"),
    new Milestone("17th Bookout 🎆", new Date("Dec 31, 2020 11:00:00"), "timer-0023"),
    new Milestone("18th Bookout 😤", new Date("Jan 8, 2021 17:30:00"), "timer-0024"),
    new Milestone("5️⃣ Months", new Date("Jan 11, 2021 00:00:00"), "timer-0025"),
    new Milestone("19th Bookout 💳", new Date("Jan 15, 2021 18:30:00"), "timer-0026"),
    new Milestone("20th Bookout 🌊", new Date("Jan 22, 2021 18:00:00"), "timer-0027"),
    new Milestone("21st Bookout 🧭", new Date("Jan 29, 2021 18:00:00"), "timer-0028"),
    new Milestone("22nd Bookout 🤟🏼", new Date("Feb 5, 2021 18:00:00"), "timer-0029"),
    new Milestone("End Of FT 🙌🏻", new Date("Feb 5, 2021 18:00:00"), "timer-0030"),
    new Milestone("6️⃣ Months", new Date("Feb 11, 2021 00:00:00"), "timer-0031"),
    new Milestone("23rd Bookout 🧧", new Date("Feb 11, 2021 13:00:00"), "timer-0032"),
    new Milestone("24th Bookout 🛠️", new Date("Feb 19, 2021 18:30:00"), "timer-0033"),
    new Milestone("25th Bookout 💈", new Date("Feb 26, 2021 18:30:00"), "timer-0034"),
    new Milestone("26th Bookout 🏒", new Date("Mar 5, 2021 18:30:00"), "timer-0035"),
    new Milestone("7️⃣ Months", new Date("Mar 11, 2021 00:00:00"), "timer-0036"),
    new Milestone("27th Bookout 🎬", new Date("Mar 12, 2021 18:30:00"), "timer-0037"),
    new Milestone("28th Bookout 👕", new Date("Mar 19, 2021 18:30:00"), "timer-0038"),
    new Milestone("29th Bookout 🎪", new Date("Mar 26, 2021 18:30:00"), "timer-0039"),
    new Milestone("30th Bookout ⛲️", new Date("Apr 1, 2021 18:30:00"), "timer-0040"),
    new Milestone("31st Bookout 🚂", new Date("Apr 9, 2021 18:30:00"), "timer-0041"),
    new Milestone("8️⃣ Months", new Date("Apr 11, 2021 00:00:00"), "timer-0042"),
    new Milestone("32nd Bookout 🌁", new Date("Apr 16, 2021 18:30:00"), "timer-0043"),
    new Milestone("33rd Bookout 🚚", new Date("Apr 23, 2021 18:30:00"), "timer-0044"),
    new Milestone("34th Bookout ✴️", new Date("Apr 30, 2021 18:30:00"), "timer-0045"),
    new Milestone("35th Bookout 🌆", new Date("May 7, 2021 18:30:00"), "timer-0046"),
    new Milestone("9️⃣ Months", new Date("May 11, 2021 00:00:00"), "timer-0047"),
    new Milestone("36th Bookout 🍋", new Date("May 14, 2021 18:30:00"), "timer-0048"),
    new Milestone("37th Bookout ↙️", new Date("May 21, 2021 18:30:00"), "timer-0049"),
    new Milestone("38th Bookout 📝", new Date("May 28, 2021 18:30:00"), "timer-0050"),
    new Milestone("39th Bookout 📤", new Date("Jun 5, 2021 18:30:00"), "timer-0051"),
    new Milestone("1️⃣0️⃣ Months", new Date("Jun 11, 2021 00:00:00"), "timer-0052"),
    new Milestone("40th Bookout 🏢", new Date("Jun 11, 2021 18:30:00"), "timer-0053"),
    new Milestone("Common Term (End) 🍻", new Date("Jun 16, 2021 18:30:00"), "timer-0054"),
    new Milestone("41st Bookout 🗿", new Date("Jun 18, 2021 18:30:00"), "timer-0055"),
    new Milestone("42nd Bookout 🌀", new Date("Jun 25, 2021 18:30:00"), "timer-0056"),
    new Milestone("43rd Bookout 📦", new Date("Jul 2, 2021 18:30:00"), "timer-0057"),
    new Milestone("44th Bookout 🍨", new Date("Jul 9, 2021 18:30:00"), "timer-0058"),
    new Milestone("1️⃣1️⃣ Months", new Date("Jul 11, 2021 00:00:00"), "timer-0059"),
    new Milestone("45th Bookout 💰", new Date("Jul 16, 2021 18:30:00"), "timer-0060"),
    new Milestone("46th Bookout ⛏️", new Date("Jul 23, 2021 18:30:00"), "timer-0061"),
    new Milestone("47th Bookout 🖥️", new Date("Jul 30, 2021 18:30:00"), "timer-0062"),
    new Milestone("Specialization Term (End) ", new Date("Aug 4, 2021 18:30:00"), "timer-0063"),
    // new Milestone("48th Bookout", new Date("Aug 6, 2021 18:30:00"), "timer-0064"),
    new Milestone("1️⃣ Year", new Date("Aug 11, 2021 00:00:00"), "timer-0065"),
    // new Milestone("49th Bookout", new Date("Aug 13, 2021 18:30:00"), "timer-0066"),
    // new Milestone("SCGP", new Date("Aug 16, 2021 16:00:00"), "timer-0067"),
    // new Milestone("50th Bookout", new Date("Aug 20, 2021 18:30:00"), "timer-0068"),
    // new Milestone("51st Bookout", new Date("Sep 3, 2021 18:30:00"), "timer-0069"),
    // new Milestone("52nd Bookout", new Date("Sep 10, 2021 18:30:00"), "timer-0070"),
    // new Milestone("1️⃣ Year 1️⃣ Month", new Date("Sep 11, 2021 00:00:00"), "timer-0071"),
    new Milestone("Operational Ready Date 🎉", new Date("Aug 10, 2022 18:00:00"), "timer-0130"),
]

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export { milestones, months }