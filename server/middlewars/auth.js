import jwt from "jsonwebtoken";
const secretKey = process.env.JWT_SECRET || "qwertyuiopasdfghjkl";

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        let decodeData = jwt.verify(token, process.env.JWT_SECRT);
        req.userId = decodeData?.id;
        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;