import {updateData} from "@/services";

export async function POST(request: Request) {
 const body = await request.json();
 const data = await updateData("payment", body.id, {status: true});
 const ResponseInit = {status: 200, statusText: "OK"};
 return Response.json({...ResponseInit, message: data});
}
