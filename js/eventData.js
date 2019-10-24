const eventData = [{
        location: "Toowong",
        timeStart: "2019-10-25T14:00",
        timeEnd: "2019-10-25T17:00",
        title: "Toowong Chinese Festival",
        cover:"images/60.jpg",
        description: "This is an event which will be held near Toowong to promote traditional Chinese culture, in which volunteers can learn and understand traditional Chinese culture, such as making handicrafts. In addition, volunteers can taste and learn to cook Chinese food. The main purpose of this activity is to promote Chinese culture through some handicrafts and local cuisine, so that to attract more people to experience the Chinese culture.",
        requiredJob: ["Photographer", "Handicraft maker", "Logistics"],
        tag: ["cul", "tec"],
        owner: "Spain Co.",
        id: "1570760202277"

    },
    {
        location: "Queen Street",
        timeStart: "2019-10-01T13:00",
        timeEnd: "2019-10-01T15:00",
        title: "Spainish Culture",
        description: "Very good event, come and join",
        requiredJob: ["Photographer", "Designer", "Back-up"],
        cover: "images/profile.jpeg",
        tag: ["eco", "tec"],
        owner: "Chinese Co.",
        id: "1570760202249"
    },
    {
        location: "Indooroopilly",
        timesStart: "2019-11-09T14:00",
        timeEnd: "2019-11-09T20:00",
        title: "Specialty Coffee Festival",
        cover: "images/john.jpg",
        description: "Do you enjoy making coffee? Do you enjoy meeting people? We have invited several famous Baristas to provide a high-quality and enchanting taste feast. Additionally, there are also desserts, cakes, drinks, pizza, snack and board games. As a volunteer, you can not only show your coffee making skills but also acquire relevant knowledge from top Baristas in Brisbane. Furthermore, you can capture people’s joy by your camera, or guide people to understand the rules of the game. And don’t forget to get a cup of free coffee with your volunteer ID :).",
        requiredJob: ["Coffee Maker", "Photographer", "Board Game guide"],
        tag: ["cul"],
        owner: "Jacaranda Coffee Co.",
        id:"1571876980044",

    },
    {
        location: "Milton",
        timeStart: "2019-10-29T8:00",
        timeEnd: "2019-10-29T17:00",
        title: "Milton Flower Festival",
        cover: "images/logo.png",
        description: "The beautiful town of Milton is used to living up to its name year-round but in spring it truly blossoms. And the Milton Flower Festival celebrates this kaleidoscope of colour through a wide assortment of excellent events. There are fireworks, fetes, fairs, and foodie events; markets and art exhibitions, and, of course, plenty of gardens to admire. Better still, you can speak directly with gardening experts.",
        requiredJob: ["Photographer", "Guide", "Ticket clerk"],
        tag: ["cul", "pol"],
        owner: "Jacaranda Coffee Co.",
        id:"1571877001272",

    }

];

const tagDict = {
    "pol":"Politics",
    "eco":"Economic",
    "env":"Environment",
    "cul":"Cultural",
    "tec":"Technology",
};


const volunteerData = [{
        volunteerId: "1",
        name: "Hugo Christie",
        gender: "Male",
        location: "Brisbane, Queensland",
        email: "v123@vol.com",
        tel: "1234555",
        profile: "images/vol-profile.JPG",
        introduction: "I am wade, I think I am really good. I have participated in several large-scale events, and every time I have new feelings, it is especially good. I used to be an organizer at the event, which is very good for me. More exercise. I also want to join some new activities now, get more exercise. I promise that I will arrive at the event on time and never miss. If you need me, please choose me.",
        skills: ["Drawing", "Photograph"],
        interest: ["Photography", "Young care"],
    },
    {
        volunteerId: "2",
        name: "Wade Giles",
        gender: "Female",
        email: "v223@vol.com",
        tel: "1234565",
        location: "Brisbane, Queensland",
        profile: "images/jan.jpg",
        introduction: "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before." +
            " In this  sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences." +
            "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. In this  sketch," +
            " maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences." +
            "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. " +
            "In this sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences.",
        skills: ["Drawing", "Photograph"],
        interest: ["Photography", "Young care"],
    },
    {
        volunteerId: "3",
        name: "Jonny Rock",
        gender: "Male",
        location: "Brisbane, Queensland",
        email: "v456@vol.com",
        tel: "1232555",
        profile: "images/john.jpg",
        introduction: "I am Jonny, and I love life and love photography. I feel that volunteer service is very good and I can play my own love for life. I really want to participate in volunteer activities, which is very important to me.So please choose me, I will definitely arrive at the event on time.",
        skills: ["Drawing", "Photograph"],
        interest: ["Photography", "Young care"],
    },
];

const matchReco = [{
        volunteerId: "2",
        signedEvent: "1570760202277",
        signedJob: "Photographer",
        type: 1,
    },
    {
        volunteerId: "3",
        signedEvent: "1570760202277",
        signedJob: "Handicraft maker",
        type: 1,
    },
    {
        volunteerId: "1",
        signedEvent: "1570760202277",
        signedJob: "Handicraft maker",
        type: 1,
    },

];


const checkLocalStorage = () => {
    if (!localStorage.getItem("eventData")) {
        localStorage.setItem("eventData", JSON.stringify(eventData));
    }
    if (!localStorage.getItem("volunteerData")) {
        localStorage.setItem("volunteerData", JSON.stringify(volunteerData));
    }
    if (!localStorage.getItem("matchReco")) {
        localStorage.setItem("matchReco", JSON.stringify(matchReco));
    }
};

const createNewEvent = (title, location, timeStart, timeEnd, requiredJob, cover, tag, description, owner, localEventData) => {
    localEventData.unshift({
        location: location,
        timeStart: timeStart,
        timeEnd: timeEnd,
        title: title,
        description: description,
        requiredJob: requiredJob,
        cover: cover,
        tag: tag,
        owner: owner,
        id: `${new Date().getTime()}`
    });
    localStorage.setItem("eventData", JSON.stringify(localEventData));
};

const updateEvent = (eventId, title, location, timeStart, timeEnd, requiredJob, cover, tag, description, owner, localEventData) => {
    const newInfo = {
        location: location,
        timeStart: timeStart,
        timeEnd: timeEnd,
        title: title,
        description: description,
        requiredJob: requiredJob,
        cover: cover,
        tag: tag,
        owner: owner,
        id: eventId
    }
    for (let i = 0; i < localEventData.length; i++) {
        if (localEventData[i].id == eventId) {
            localEventData.splice(i, 1, newInfo);
            localStorage.setItem("eventData", JSON.stringify(localEventData));
        }
    }
};

const updateVolunteer = (volunteer, localVolunteerData) => {
    for (let i = 0; i < localVolunteerData.length; i++) {
        if (localVolunteerData[i].volunteerId == volunteer.volunteerId) {
            localVolunteerData.splice(i, 1, volunteer);
            localStorage.setItem("volunteerData", JSON.stringify(localVolunteerData));
        }
    }
}

function getEventDetail(eventId) {
    const localEventData = JSON.parse(localStorage.getItem("eventData"));
    for (let i = 0; i < localEventData.length; i++) {
        if (localEventData[i].id == eventId) {
            return localEventData[i];
        }
    }
}

function getVolunteerDetail(vid) {
    const localVolunteerData = JSON.parse(localStorage.getItem("volunteerData"));
    for (let i = 0; i < localVolunteerData.length; i++) {
        if (localVolunteerData[i].volunteerId == vid) {
            return localVolunteerData[i];
        }
    }
}