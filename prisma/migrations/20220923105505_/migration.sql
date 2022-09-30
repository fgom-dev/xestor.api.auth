-- CreateTable
CREATE TABLE "black_list" (
    "id" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "black_list_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "black_list_token_key" ON "black_list"("token");
