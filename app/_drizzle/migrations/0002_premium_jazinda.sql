CREATE TABLE IF NOT EXISTS "awwwards_dev"."sublinks" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"count" integer NOT NULL,
	"link_id" integer NOT NULL,
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone DEFAULT now(),
	CONSTRAINT "sublinks_name_unique" UNIQUE("name")
);
--> statement-breakpoint
DROP TABLE "awwwards_dev"."sublins";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "awwwards_dev"."sublinks" ADD CONSTRAINT "sublinks_link_id_links_id_fk" FOREIGN KEY ("link_id") REFERENCES "awwwards_dev"."links"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
