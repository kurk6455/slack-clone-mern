import { StreamChat } from 'stream-chat';
import { ENV } from './env.js';


const serverClient = StreamChat.getInstance(ENV.STREAM_API_KEY, ENV.STREAM_SECRET_KEY);

export const upsertStreamUser = async (userData) => {
    try {
        await serverClient.upsertUsers(userData.name);
        console.log("Stream user upserted successfull");
        return userData;
    } catch (error) {
        console.log("Error upserting StreamUser : ", error);

    }
}

export const deleteStreamUser = async (userId) => {
    try {
        await serverClient.deleteUser(userId);
        console.log("Stream user deleted successfull");
        return userData;
    } catch (error) {
        console.log("Error deleting StreamUser : ", error);

    }
}

export const generateStreamToken = (userId) => {
    try {
        const userIdString = userId.toString();
        return serverClient.createToken(userIdString);
    } catch (error) {
        console.log("Error generating stream token : ", error);
        return null;
    }
    
}

