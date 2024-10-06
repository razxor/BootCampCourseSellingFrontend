export const ROUTES = {
    HOME: "/",
    ABOUT: "/about",
    BLOG: "/blog",
    FAQ: "/faq",
    SINGLE_BOOK:{
        STATIC: "/book/:bookId",
        DYNAMIC: (bookId)=>`/book/${bookId}`,
    }
};

export default ROUTES;