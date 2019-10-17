const eventData = [{
        location: "Queen St",
        timeStart: "2019-10-01T13:00",
        timeEnd: "2019-10-01T15:00",
        title: "Spainish Culture",
        description: "Very good event, come and join",
        requiredJob:["Photographer", "Designer", "Back-up"],
        cover: "images/profile.jpeg",
        tag: ["eco","tec"],
        owner: "Spain Co.",
        id: "1570760202249"
    },
    {
        location: "Toowong",
        timeStart: "2019-10-12T08:00",
        timeEnd: "2019-10-12T11:00",
        title: "Chines Culture",
        description: null,
        requiredJob:["Back-up"],
        cover: "images/profile.jpeg",
        tag: ["pol","eco"],
        owner: "Spain Co.",
        id: "1570760202300"
    },
    {
        location: "Milton",
        timeStart: "2019-10-20T13:00",
        timeEnd: "2019-10-20T13:00",
        title: "Aussie Culture",
        description: null,
        requiredJob:["Photographer", "Back-up"],
        cover: "images/profile.jpeg",
        tag: ["cul","tec"],
        owner: "Spain Co.",
        id: "1570760203456"
    },
];


const volunteerData = [
    {
        volunteerId:"1",
        name:"Hugo Christie",
        gender:"Male",
        location:"Brisbane, Queensland",
        email:"v123@vol.com",
        tel: "1234555",
        profile:"images/vol-profile.JPG",
        introduction: "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before."+
        " In this  sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences."+
        "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. In this  sketch,"+
        " maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences."+
        "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. "+
        "In this sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences.",
        skills: ["Drawing", "Photograph"],
        interest: ["Photography", "Young care"],
    },
    {
        volunteerId:"2",
        name:"Wade Giles",
        gender:"Female",
        email:"v123@vol.com",
        tel: "1234555",
        location:"Brisbane, Queensland",
        profile:"images/vol-profile.JPG",
        introduction: "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before."+
        " In this  sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences."+
        "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. In this  sketch,"+
        " maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences."+
        "in this area, user needs to introduce himself or herself, maybe 50-150 words? oh, I forget the number they mentioned before. "+
        "In this sketch, maybe 8-10 words a line. So, now  there has been 35 words. Let me type more to meet 50 words. ok, I will repeat these sentences.",
        skills: ["Drawing", "Photograph"],
        interest: ["Photography", "Young care"],
    }
];

const matchReco = [
    {
        volunteerId:"1",
        signedEvent:"1570760203456",
        signedJob:"Photographer",
        type:1,
    },
    {
        volunteerId:"2",
        signedEvent:"1570760203456",
        signedJob:"Photographer",
        type: 1,
    }
];


const checkLocalStorage = () => {
    if (!localStorage.getItem("eventData")) {
        localStorage.setItem("eventData", JSON.stringify(eventData));
    }
    if(!localStorage.getItem("volunteerData")) {
        localStorage.setItem("volunteerData", JSON.stringify(volunteerData));
    }
    if(!localStorage.getItem("matchReco")) {
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
    for(let i=0; i<localVolunteerData.length; i++) {
        if(localVolunteerData[i].volunteerId==vid){
            return localVolunteerData[i];
        }
    }
}