import prismaClient from "../../prisma";

interface GetBanner {

    banner: string
}

class GetBannerProductsServices {

    async execute({banner}: GetBanner) {

        const getBanner = prismaClient.product.findFirst({
            where: {
                banner: banner
            }
        });

        return getBanner;

    }
}

export { GetBannerProductsServices }
