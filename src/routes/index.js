export const ROUTES = {    
    LOGIN: "/login",
    REGISTER: "/signup",
    HOME: "/",
    COURSES: "/courses",
    ABOUT: "/about",
    BLOG: "/blog",
    FAQ: "/faq",
    SINGLE_COURSE:{
        STATIC: "/course/:id",
        DYNAMIC: (id)=>`/course/${id}`,
    }
};

export default ROUTES;