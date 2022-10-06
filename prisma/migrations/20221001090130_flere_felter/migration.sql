/*
  Warnings:

  - Added the required column `blur` to the `Konvertering` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mode` to the `Konvertering` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfPrimitives` to the `Konvertering` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pathOriginalbilde` to the `Konvertering` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pathSvgBilde` to the `Konvertering` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Konvertering" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "unsplashId" TEXT NOT NULL,
    "mode" INTEGER NOT NULL,
    "numberOfPrimitives" INTEGER NOT NULL,
    "blur" INTEGER NOT NULL,
    "pathOriginalbilde" TEXT NOT NULL,
    "pathSvgBilde" TEXT NOT NULL,
    "metadata" TEXT NOT NULL
);
INSERT INTO "new_Konvertering" ("id", "metadata", "unsplashId") SELECT "id", "metadata", "unsplashId" FROM "Konvertering";
DROP TABLE "Konvertering";
ALTER TABLE "new_Konvertering" RENAME TO "Konvertering";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
