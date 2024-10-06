export const ROUTES = {
    LOGIN: "/login",
    REGISTER: "/signup",
    HOME: "/",
    COURSES: "/courses",
    ABOUT: "/about",
    BLOG: "/blog",
    FAQ: "/faq",
    SINGLE_BOOK:{
        STATIC: "/book/:bookId",
        DYNAMIC: (bookId)=>`/book/${bookId}`,
    }
};

export default ROUTES;