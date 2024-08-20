import { apiSelector } from "@/models/apiModel";
import { retrievePostman } from "@/services/apiService";
import { useSetRecoilState } from "recoil";

const useApiController = () => {
  const setApi = useSetRecoilState(apiSelector);

  const retrievePostmanService = async () => {
    setApi({ loading: true });

    await retrievePostman()
      .then((response) => {
        setApi({
          data: {
            title: response.info.name,
            description: "",
            services: response.item.map((tmp) => {
              return {
                title: tmp.name,
                method: tmp.request.method,
                url: tmp.request.url.raw,
                body: tmp.request.body.raw,
                responses: tmp.response.map((res) => {
                  return {
                    label: res.name,
                    reqBody: res.originalRequest.body.raw,
                    rsBody: res.body,
                  };
                }),
              };
            }),
          },
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setApi({ loading: false });
      });
  };

  return {
    retrievePostmanService,
  };
};

export default useApiController;
