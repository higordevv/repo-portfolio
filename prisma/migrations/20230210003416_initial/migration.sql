-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "acessToken" TEXT DEFAULT null,
    "created_At" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "config_of_website" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "owner_id" TEXT NOT NULL,
    CONSTRAINT "config_of_website_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_password_key" ON "user"("password");

-- CreateIndex
CREATE UNIQUE INDEX "user_acessToken_key" ON "user"("acessToken");

-- CreateIndex
CREATE UNIQUE INDEX "user_created_At_key" ON "user"("created_At");

-- CreateIndex
CREATE INDEX "user_id_idx" ON "user"("id");

-- CreateIndex
CREATE INDEX "config_of_website_id_idx" ON "config_of_website"("id");
