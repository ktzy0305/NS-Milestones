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
    new Milestone("Specialization Term (End) 🍻", new Date("Aug 4, 2021 18:30:00"), "timer-0063"),
    new Milestone("48th Bookout 💎", new Date("Aug 6, 2021 18:30:00"), "timer-0064"),
    new Milestone("1️⃣ Year", new Date("Aug 11, 2021 00:00:00"), "timer-0065"),
    new Milestone("49th Bookout 🏋️", new Date("Aug 13, 2021 18:30:00"), "timer-0066"),
    new Milestone("SCGP 🗡️ 🎉🎉🎉", new Date("Aug 16, 2021 16:00:00"), "timer-0067"),
    new Milestone("50th Bookout 🎖️", new Date("Aug 27, 2021 18:30:00"), "timer-0068"),
    new Milestone("51st Bookout 😶", new Date("Sep 3, 2021 18:30:00"), "timer-0069"),
    new Milestone("1️⃣ Year 1️⃣ Month", new Date("Sep 11, 2021 00:00:00"), "timer-0070"),
    new Milestone("52nd Bookout 🤹", new Date("Sep 11, 2021 09:00:00"), "timer-0071"),
    new Milestone("53rd Bookout 👨‍⚖️", new Date("Sep 17, 2021 15:00:00"), "timer-0072"),
    new Milestone("53rd Bookout 🚖", new Date("Sep 24, 2021 15:00:00"), "timer-0073"),
    new Milestone("54th Bookout 🎒", new Date("Oct 1, 2021 15:00:00"), "timer-0074"),
    new Milestone("55th Bookout 🌕", new Date("Oct 8, 2021 15:00:00"), "timer-0075"),
    new Milestone("1️⃣ Year 2️⃣ Months", new Date("Oct 11, 2021 00:00:00"), "timer-0076"),
    new Milestone("56th Bookout 💮", new Date("Oct 15, 2021 15:00:00"), "timer-0077"),
    new Milestone("57th Bookout 🐨", new Date("Oct 22, 2021 15:00:00"), "timer-0078"),
    new Milestone("58th Bookout 🍿", new Date("Oct 29, 2021 15:00:00"), "timer-0079"),
    new Milestone("59th Bookout 🍓", new Date("Nov 5, 2021 15:00:00"), "timer-0080"),
    new Milestone("1️⃣ Year 3️⃣ Months", new Date("Nov 11, 2021 00:00:00"), "timer-0081"),
    new Milestone("60th Bookout 🦷", new Date("Nov 12, 2021 15:00:00"), "timer-0082"),
    new Milestone("61st Bookout 🍜", new Date("Nov 19, 2021 15:00:00"), "timer-0083"),
    new Milestone("62nd Bookout ⛳️", new Date("Nov 26, 2021 15:00:00"), "timer-0084"),
    new Milestone("63rd Bookout 🏄", new Date("Dec 3, 2021 15:00:00"), "timer-0085"),
    new Milestone("64th Bookout 🍵", new Date("Dec 10, 2021 15:00:00"), "timer-0086"),
    new Milestone("1️⃣ Year 4️⃣ Months", new Date("Dec 11, 2021 00:00:00"), "timer-0087"),
    new Milestone("65th Bookout 🐾", new Date("Dec 17, 2021 15:00:00"), "timer-0088"),
    new Milestone("66th Bookout 🎅", new Date("Dec 24, 2021 15:00:00"), "timer-0089"),
    new Milestone("67th Bookout 🐬", new Date("Dec 31, 2021 15:00:00"), "timer-0090"),
    new Milestone("68th Bookout 🍿", new Date("Jan 7, 2022 15:00:00"), "timer-0091"),
    new Milestone("1️⃣ Year 5️⃣ Months", new Date("Jan 11, 2022 00:00:00"), "timer-0092"),
    new Milestone("69th Bookout 🪐", new Date("Jan 14, 2022 15:00:00"), "timer-0093"),
    new Milestone("70th Bookout 🥞", new Date("Jan 21, 2022 15:00:00"), "timer-0094"),
    new Milestone("71st Bookout 🧧", new Date("Jan 28, 2022 15:00:00"), "timer-0095"),
    new Milestone("72nd Bookout 🎰", new Date("Feb 4, 2022 15:00:00"), "timer-0096"),
    new Milestone("1️⃣ Year 6️⃣ Months", new Date("Feb 11, 2022 00:00:00"), "timer-0097"),
    new Milestone("73rd Bookout 🌯", new Date("Feb 11, 2022 15:00:00"), "timer-0098"),
    new Milestone("74th Bookout 🍽️", new Date("Feb 18, 2022 15:00:00"), "timer-0099"),
    new Milestone("75th Bookout 💹", new Date("Feb 25, 2022 15:00:00"), "timer-0100"),
    new Milestone("76th Bookout 🍩", new Date("Mar 4, 2022 15:00:00"), "timer-0101"),
    new Milestone("1️⃣ Year 7️⃣ Months", new Date("Mar 11, 2022 00:00:00"), "timer-0102"),
    new Milestone("77th Bookout 🐟", new Date("Mar 11, 2022 15:00:00"), "timer-0103"),
    new Milestone("78th Bookout 🏨", new Date("Mar 18, 2022 15:00:00"), "timer-0104"),
    new Milestone("79th Bookout 🥅", new Date("Mar 25, 2022 15:00:00"), "timer-0105"),
    new Milestone("80th Bookout 🤡", new Date("Apr 1, 2022 15:00:00"), "timer-0106"),
    new Milestone("81st Bookout ", new Date("Apr 8, 2022 15:00:00"), "timer-0107"),
    new Milestone("1️⃣ Year 8️⃣ Months", new Date("Apr 11, 2022 15:00:00"), "timer-0108"),
    new Milestone("82nd Bookout 🌺", new Date("Apr 15, 2022 15:00:00"), "timer-0109"),
    new Milestone("83rd Bookout 🌽", new Date("Apr 22, 2022 15:00:00"), "timer-0110"),
    new Milestone("84th Bookout 👪", new Date("Apr 29, 2022 15:00:00"), "timer-0111"),
    new Milestone("85th Bookout 🐳", new Date("May 7, 2022 18:00:00"), "timer-0112"),
    new Milestone("1️⃣ Year 9️⃣ Months", new Date("May 11, 2022 00:00:00"), "timer-0113"),
    new Milestone("86th Bookout 📪", new Date("May 14, 2022 21:00:00"), "timer-0114"),
    new Milestone("87th Bookout 👄", new Date("May 21, 2022 21:00:00"), "timer-0115"),
    new Milestone("88th Bookout 🗾", new Date("May 28, 2022 21:00:00"), "timer-0116"),
    new Milestone("89th Bookout 🎴", new Date("Jun 4, 2022 21:00:00"), "timer-0117"),
    new Milestone("1️⃣ Year 1️⃣0️⃣ Months", new Date("Jun 11, 2022 00:00:00"), "timer-0118"),
    new Milestone("90th Bookout 🚵", new Date("Jun 11, 2022 21:00:00"), "timer-0119"),
    new Milestone("91st Bookout 📼", new Date("Jun 18, 2022 21:00:00"), "timer-0120"),
    new Milestone("92nd Bookout 🔩", new Date("Jun 25, 2022 21:00:00"), "timer-0121"),
    new Milestone("93rd Bookout 🍨", new Date("Jul 2, 2022 21:00:00"), "timer-0122"),
    new Milestone("94th Bookout 🌹", new Date("Jul 9, 2022 21:00:00"), "timer-0123"),
    new Milestone("1️⃣ Year 1️⃣1️⃣ Months", new Date("Jul 11, 2022 00:00:00"), "timer-0124"),
    new Milestone("95th Bookout 🐺", new Date("Jul 16, 2022 21:00:00"), "timer-0125"),
    new Milestone("96th Bookout 👘", new Date("Jul 23, 2022 21:00:00"), "timer-0126"),
    new Milestone("Bring Everything Home 👜", new Date("Jul 29, 2022 00:00:00"), "timer-0127"),
    new Milestone("97th Bookout 🗼", new Date("Jul 30, 2022 21:00:00"), "timer-0128"),
    new Milestone("98th Bookout 👯", new Date("Aug 5, 2022 17:00:00"), "timer-0129"),
    new Milestone("Operational Ready Date 🎉", new Date("Aug 10, 2022 00:00:00"), "timer-0130"),
]

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export { milestones, months }