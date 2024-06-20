CREATE TABLE IF NOT EXISTS "awwwards_dev"."awards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"route_to" varchar NOT NULL,
	"description" text,
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone DEFAULT now(),
	CONSTRAINT "awards_name_unique" UNIQUE("name"),
	CONSTRAINT "awards_route_to_unique" UNIQUE("route_to")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "awwwards_dev"."category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"route_to" varchar NOT NULL,
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone DEFAULT now(),
	CONSTRAINT "category_name_unique" UNIQUE("name"),
	CONSTRAINT "category_route_to_unique" UNIQUE("route_to")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "awwwards_dev"."tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"route_to" varchar NOT NULL,
	"created_at" timestamp (6) with time zone DEFAULT now(),
	"updated_at" timestamp (6) with time zone DEFAULT now(),
	CONSTRAINT "tags_name_unique" UNIQUE("name"),
	CONSTRAINT "tags_route_to_unique" UNIQUE("route_to")
);
