select "categories"."name" as "category",
count("castMembers"."actorId") as "countAppearance"
from "castMembers"
join "filmCategory" using ("filmId")
join "categories" using ("categoryId")
where "castMembers"."actorId" = 178
group by "categories"."name";
