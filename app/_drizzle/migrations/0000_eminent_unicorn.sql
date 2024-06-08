CREATE SCHEMA "awwwards_dev";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "awwwards_dev"."links" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"routeTo" varchar NOT NULL,
	"description" text,
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone DEFAULT now(),
	"svg_icon_name" varchar NOT NULL,
	CONSTRAINT "links_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "awwwards_dev"."sublins" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"count" integer NOT NULL,
	"link_id" integer NOT NULL,
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone DEFAULT now(),
	CONSTRAINT "sublins_name_unique" UNIQUE("name")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "awwwards_dev"."sublins" ADD CONSTRAINT "sublins_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "awwwards_dev"."links"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
