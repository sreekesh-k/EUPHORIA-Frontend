/*
  Warnings:

  - Added the required column `upi_transaction_id` to the `Event_participants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Event_participants` ADD COLUMN `upi_transaction_id` VARCHAR(191) NOT NULL;
