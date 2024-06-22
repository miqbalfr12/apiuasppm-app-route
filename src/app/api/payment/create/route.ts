import {addData} from "@/services";

export const POST = async (Request: Request) => {
 const body = await Request.json();
 console.log(body);
 const ress = await addData("payment", body);
 console.log(ress.id);
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: {id: ress.id, ...body}});
};
