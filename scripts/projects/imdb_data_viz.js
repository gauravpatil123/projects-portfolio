import { get_link_url } from "../utils.js";

var introduction_text = "IMDb is an online database containing various aspects of information related to films, tv series and other multimedia content types. In this project I have attempted to manipulate this huge database to create data art of large network graphs from the database. In this project I have had the opportunity to demonstrate & practice data ETL for a huge dataset. Further, in this project I have successfully created custom network graphs from the extracted data - details of which are mentioned in further sections.";
var dataset_text = "The primary dataset used in this project is from the IMDb Non-Commercial data dump which consists of 7 gigantic (each having ~10 Million rows) tsv files. From this data dump I used the following 4 files for this project.<br>Names_basic.tsv (11,487,098 rows, 6 cols), Titles_basic.tsv (8,773,132 rows, 9 cols), Title_crew.tsv ( 8,773,132 rows, 3 cols), Title_ratings.tsv (1,224,677 rows, 3 cols).<br>The documentation and download links of the database are mentioned in the project panel above.";

function main() {

    $("#introduction-text").html(introduction_text);

    $("#dataset-text").html(dataset_text);

}

main();