import prismaClient from "../../prisma";


class GetBannerProductsServices {

    async execute() {



        const getBanner = prismaClient.product.findMany({
            select: {
                banner: true
            }
        });

        return getBanner;

    }
}

export { GetBannerProductsServices }
