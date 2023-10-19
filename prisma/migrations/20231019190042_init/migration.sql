-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Flat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "surface" REAL NOT NULL,
    "nb_rooms" INTEGER NOT NULL,
    "rent_amount" REAL NOT NULL,
    "contract_type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "need_refresh" BOOLEAN NOT NULL,
    "location" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Flat_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LeaseAgreement" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "rent_amount" REAL NOT NULL,
    "deposit_amount" REAL NOT NULL,
    "flat_id" INTEGER NOT NULL,
    CONSTRAINT "LeaseAgreement_flat_id_fkey" FOREIGN KEY ("flat_id") REFERENCES "Flat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tenant" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "emergency_contact" TEXT NOT NULL,
    "entry_date" DATETIME NOT NULL,
    "exit_date" DATETIME
);

-- CreateTable
CREATE TABLE "TenantFlat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "flat_id" INTEGER NOT NULL,
    "tenant_id" INTEGER NOT NULL,
    CONSTRAINT "TenantFlat_flat_id_fkey" FOREIGN KEY ("flat_id") REFERENCES "Flat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TenantFlat_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FinancialTransaction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "transaction_type" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "transaction_date" DATETIME NOT NULL,
    "flat_id" INTEGER NOT NULL,
    CONSTRAINT "FinancialTransaction_flat_id_fkey" FOREIGN KEY ("flat_id") REFERENCES "Flat" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PaymentHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "payment_date" DATETIME NOT NULL,
    "amount_paid" REAL NOT NULL,
    "payment_status" TEXT NOT NULL,
    "payment_method" TEXT NOT NULL,
    "tenant_id" INTEGER NOT NULL,
    "lease_agreement_id" INTEGER NOT NULL,
    "transaction_id" INTEGER NOT NULL,
    CONSTRAINT "PaymentHistory_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "Tenant" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PaymentHistory_lease_agreement_id_fkey" FOREIGN KEY ("lease_agreement_id") REFERENCES "LeaseAgreement" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "PaymentHistory_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "FinancialTransaction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_email_key" ON "Tenant"("email");
