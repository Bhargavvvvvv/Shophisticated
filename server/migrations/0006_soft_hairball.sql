ALTER TABLE "email_tokens" DROP CONSTRAINT "email_tokens_identifier_token_pk";--> statement-breakpoint
ALTER TABLE "email_tokens" ADD CONSTRAINT "email_tokens_id_token_pk" PRIMARY KEY("id","token");--> statement-breakpoint
ALTER TABLE "email_tokens" ADD COLUMN "id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "email_tokens" DROP COLUMN IF EXISTS "identifier";