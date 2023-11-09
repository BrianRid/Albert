import { Flat, PrismaClient } from "@prisma/client";
import properties from "./seeds/properties";

const prisma = new PrismaClient();

const promisesFlats: Promise<Flat>[] = [];

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: "brianridolce@gmail.com" },
  });
  if (user) {
    for (const flat of properties) {
      promisesFlats.push(
        prisma.flat.create({
          data: { ...flat, userId: user.id },
        })
      );
    }
  }

  Promise.all(promisesFlats)
    .then((response: Flat[]) => {
      let log: Record<string, Flat[] | string> = {};
      if (response.length > 0) {
        log = { message: "Properties created", properties: response };
      }
      console.log(log);
    })
    .catch((error) => {
      console.error(error);
    });

  await Promise.all(promisesFlats);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
