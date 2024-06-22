import {retrieveData, retrieveDataById} from "@/services";

export async function GET(request: Request, {params}: {params: {id: string}}) {
 console.log(params);
 if (params.id) {
  const data = await retrieveDataById("payment", params.id[0]);
  console.log(data);
  const ResponseInit = {status: 200, statusText: "OK"};
  return Response.json({...ResponseInit, message: data});
 } else {
  const data = await retrieveData("payment");
  console.log(data);
  const ResponseInit = {status: 200, statusText: "OK"};
  return Response.json({...ResponseInit, message: data});
 }
}
