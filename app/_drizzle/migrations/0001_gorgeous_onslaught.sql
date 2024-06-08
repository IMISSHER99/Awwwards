ALTER TABLE "awwwards_dev"."links" ADD COLUMN "route_to" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "awwwards_dev"."links" DROP COLUMN IF EXISTS "routeTo";