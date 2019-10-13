const eventData = [{
        location: "Queen St",
        timeStart: "2019-10-02",
        timeEnd: "2019-10-03",
        title: "Spainish Culture",
        description: "Very good event, come and join",
        cover: "images/profile.jpeg",
        tag: [],
        owner: "Spain Co.",
        id: "1570760202249"
    },
    {
        location: "Queen St",
        timeStart: "2019-10-02",
        timeEnd: "2019-10-02",
        title: "Spainish Culture",
        description: null,
        cover: "images/profile.jpeg",
        tag: [],
        owner: "Spain Co.",
        id: "1570760202300"
    },
    {
        location: "Queen St",
        timeStart: "2019-10-02",
        timeEnd: "2019-10-04",
        title: "Spainish Culture",
        description: null,
        cover: "images/profile.jpeg",
        tag: [],
        owner: "Spain Co.",
        id: "1570760203456"
    },
];


const volunteerData = [
    {
        voluntterId:"1",
        signedEvent:"1570760203456",
        name:"Hugo Christie",
        gender:"Male",
        location:"Brisbane, Queensland",
        instruction: "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before."+
        " In this  sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences."+
        "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. In this  sketch,"+
        " maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences."+
        "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. "+
        "In this sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences.",
        skills: ["Drawing", "Photograph"],
        interest: ["Photography", "Young care"],
    },
    {
        voluntterId:"2",
        signedEvent:"1570760203456",
        name:"Hugo Christie",
        gender:"Male",
        location:"Brisbane, Queensland",
        instruction: "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before."+
        " In this  sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences."+
        "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. In this  sketch,"+
        " maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences."+
        "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. "+
        "In this sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences.",
        skills: ["Drawing", "Photograph"],
        interest: ["Photography", "Young care"],
    }
];


const checkLocalStorage = () => {
    if (!localStorage.getItem("eventData")) {
        localStorage.setItem("eventData", JSON.stringify(eventData));
    }
};

const createNewEvent = (title, location, timeStart, timeEnd, cover, tag, description, owner, localEventData) => {
    localEventData.push({
        location: location,
        timeStart: timeStart,
        timeEnd: timeEnd,
        title: title,
        description: description,
        cover: cover,
        tag: tag,
        owner: owner,
        id: `${new Date().getTime()}`
    });
    localStorage.setItem("eventData", JSON.stringify(localEventData));
};

const updateEvent = (eventId, title, location, timeStart, timeEnd, cover, tag, description, owner, localEventData) => {
    const newInfo = {
        location: location,
        timeStart: timeStart,
        timeEnd: timeEnd,
        title: title,
        description: description,
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

function getEventDetail(eventId) {
    const localEventData = JSON.parse(localStorage.getItem("eventData"));
    for (let i = 0; i < localEventData.length; i++) {
        if (localEventData[i].id == eventId) {
            return localEventData[i];
        }
    }
}