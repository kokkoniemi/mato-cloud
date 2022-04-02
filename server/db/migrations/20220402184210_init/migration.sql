-- CreateEnum
CREATE TYPE "Role" AS ENUM ('OWNER', 'COLLABORATOR', 'GUEST');

-- CreateEnum
CREATE TYPE "RecordStatus" AS ENUM ('EXCLUDED', 'INCLUDED', 'UNCERTAIN');

-- CreateEnum
CREATE TYPE "SearchDatabase" AS ENUM ('ACM', 'IEEE', 'SCOPUS', 'SCHOLAR', 'WILEY', 'TANDFONLINE', 'SPRINGER', 'SCIENCEDIRECT', 'WOS', 'PROQUEST');

-- CreateEnum
CREATE TYPE "RecordImportStatus" AS ENUM ('DRAFT', 'SUCCEED', 'FAILED');

-- CreateEnum
CREATE TYPE "MappingQuestionType" AS ENUM ('SINGLESELECT', 'MULTISELECT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "emailHash" VARCHAR(255) NOT NULL,
    "emailHashIv" VARCHAR(255) NOT NULL,
    "emailConfirmed" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "themeColor" VARCHAR(24),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjectAccess" (
    "id" TEXT NOT NULL,
    "projectId" VARCHAR(255) NOT NULL,
    "userId" VARCHAR(255),
    "emailHash" VARCHAR(255) NOT NULL,
    "emailHashIv" VARCHAR(255) NOT NULL,
    "activated" BOOLEAN NOT NULL DEFAULT false,
    "linkSentAt" TIMESTAMP(3) NOT NULL,
    "issuedById" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL DEFAULT E'COLLABORATOR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProjectAccess_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LoginRequest" (
    "id" TEXT NOT NULL,
    "emailHash" VARCHAR(255) NOT NULL,
    "emailHashIv" VARCHAR(255) NOT NULL,
    "ipHash" VARCHAR(255) NOT NULL,
    "ipHashIv" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LoginRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Record" (
    "id" TEXT NOT NULL,
    "projectId" VARCHAR(255) NOT NULL,
    "number" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "author" VARCHAR(255) NOT NULL,
    "status" "RecordStatus",
    "publicationId" VARCHAR(255) NOT NULL,
    "isDraft" BOOLEAN NOT NULL DEFAULT true,
    "history" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordComment" (
    "id" TEXT NOT NULL,
    "recordId" VARCHAR(255) NOT NULL,
    "createdById" VARCHAR(255),
    "content" TEXT NOT NULL,
    "history" JSONB NOT NULL,
    "deletedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordURL" (
    "id" TEXT NOT NULL,
    "recordId" VARCHAR(255) NOT NULL,
    "value" TEXT NOT NULL,
    "history" JSONB NOT NULL,
    "isPreferred" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordURL_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publication" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "quality" INTEGER NOT NULL,
    "history" JSONB NOT NULL,
    "projectId" VARCHAR(255) NOT NULL,

    CONSTRAINT "Publication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordImport" (
    "id" TEXT NOT NULL,
    "projectId" VARCHAR(255) NOT NULL,
    "database" "SearchDatabase" NOT NULL,
    "status" "RecordImportStatus" NOT NULL,
    "total" INTEGER NOT NULL,
    "dublicates" INTEGER NOT NULL,
    "payload" JSONB NOT NULL,
    "createdById" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecordImport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecordLog" (
    "id" TEXT NOT NULL,
    "recordId" VARCHAR(255) NOT NULL,
    "field" VARCHAR(255) NOT NULL,
    "before" JSONB NOT NULL,
    "after" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecordLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MappingQuestion" (
    "id" TEXT NOT NULL,
    "projectId" VARCHAR(255) NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "type" "MappingQuestionType" NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "position" INTEGER NOT NULL,
    "history" JSONB NOT NULL,
    "createdById" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MappingQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MappingKeyword" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "mappingQuestionId" VARCHAR(255) NOT NULL,
    "position" INTEGER NOT NULL,
    "color" VARCHAR(24) NOT NULL,

    CONSTRAINT "MappingKeyword_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MappingKeywordToRecord" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MappingKeywordToRecord_AB_unique" ON "_MappingKeywordToRecord"("A", "B");

-- CreateIndex
CREATE INDEX "_MappingKeywordToRecord_B_index" ON "_MappingKeywordToRecord"("B");

-- AddForeignKey
ALTER TABLE "ProjectAccess" ADD CONSTRAINT "ProjectAccess_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectAccess" ADD CONSTRAINT "ProjectAccess_issuedById_fkey" FOREIGN KEY ("issuedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectAccess" ADD CONSTRAINT "ProjectAccess_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES "Publication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordComment" ADD CONSTRAINT "RecordComment_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordComment" ADD CONSTRAINT "RecordComment_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordURL" ADD CONSTRAINT "RecordURL_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publication" ADD CONSTRAINT "Publication_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordImport" ADD CONSTRAINT "RecordImport_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordImport" ADD CONSTRAINT "RecordImport_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecordLog" ADD CONSTRAINT "RecordLog_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MappingQuestion" ADD CONSTRAINT "MappingQuestion_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MappingQuestion" ADD CONSTRAINT "MappingQuestion_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MappingKeyword" ADD CONSTRAINT "MappingKeyword_mappingQuestionId_fkey" FOREIGN KEY ("mappingQuestionId") REFERENCES "MappingQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MappingKeywordToRecord" ADD FOREIGN KEY ("A") REFERENCES "MappingKeyword"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MappingKeywordToRecord" ADD FOREIGN KEY ("B") REFERENCES "Record"("id") ON DELETE CASCADE ON UPDATE CASCADE;
