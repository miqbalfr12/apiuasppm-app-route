import instance from "@/lib/axios/instance";

export const orderServices = {
 detail: (data: string) => instance.get(`/api/payment/${data}`),
 pembayaran: (data: object) => instance.post(`/api/payment/pay`, data),
};
