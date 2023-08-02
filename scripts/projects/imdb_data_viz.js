import { section_expand } from "../utils.js";

var introduction_text = "IMDb is an online database containing various aspects of information related to films, tv series and other multimedia content types. In this project I have attempted to manipulate this huge database to create data art of large network graphs from the database. In this project I have had the opportunity to demonstrate & practice data ETL for a huge dataset. Further, in this project I have successfully created custom network graphs from the extracted data - details of which are mentioned in further sections.";

var dataset_text = "The primary dataset used in this project is from the IMDb Non-Commercial data dump which consists of 7 gigantic (each having ~10 Million rows) tsv files. From this data dump I used the following 4 files for this project.<br>Names_basic.tsv (11,487,098 rows, 6 cols), Titles_basic.tsv (8,773,132 rows, 9 cols), Title_crew.tsv ( 8,773,132 rows, 3 cols), Title_ratings.tsv (1,224,677 rows, 3 cols).<br>The documentation and download links of the database are mentioned in the project panel above.";

var methodology_text1 = "Inorder to get to the final network graph data art outputs I approached the data in 3 phases namely data preprocessing, data filtering & extraction, and creating the data network graphs; each one building on top of the previous phase.";
var methodology_text2 = "Since the data files from the data dump are provided as tab separated value (tsv) format it takes a lot of time to process them to do anything meaningful with the dataset. Just searching for a common value between two files takes quadratic time complexity, and on the dataset containing rows in the order of ~10 Million it amounts to quite some time every time a search needs to be executed. To solve this problem I processed the datafiles into custom python dictionary data structures to suit the purpose of this project and saved them as json files for future access and use during the project's next steps.";
var fig1_caption = "Fig #1: <i>Algorithm to convert tsv files to python dict</i>"
var fig2_caption = "Fig #2: <i>Code showing the creation of json data files</i>";
var methodology_text3 = "Creating the json data files changed the time complexity of most operations from quadratic time to constant time complexity, and linear time complexity for some cases. Consequently, the time required for extracting data from the files was reduced significantly and the newly created json files were also accessible for use in the next steps of the project.";
var fig3_caption = "Fig #3: <i>Algorithm to filter living artists</i>";
var fig4_caption = "Fig #4: <i>Algorithm to filter artists by profession</i>";
var methodology_text4 = "Looking carefully at the dataset and analyzing it I found that the dataset was spanning a large timeline and it included people who were alive and dead both in the same data files. So as the next step I decided to filter the live people from the dataset as another attempt to further cut down the dataset size."; 
var fig5_caption = "Fig #5: <i>Code demonstrating both the filter of live artist and artists by profession</i>";
var methodology_text5 = "Even after extracting the data of live artists, its large size mandated to filter the datasets further using some additional metric. The original data dump had a mixture of all people from various professions related to the media industry and since the json dataset from the previous phase is built from the original data dump, the json datasets also have a mixture of all the professions in the data files. Inorder to make data graphs for people for selected professional roles it was essential to filter the dataset by select professions. So as a next step I decided to filter and extract data for 4 professional roles namely actors, actresses, directors & writers for them to be ultimately used to build 4 different data graphs."; 
var fig6_caption = "Fig #6: <i>Code showing the extraction of movie titles data from all titles data</i>";
var fig7_caption = "Fig #7: <i>Code filtering the movie titles data to contain movies from 2021-2022</i>";
var methodology_text6 = "Further, I decided to filter all the movies from the created titles dataset which included all forms of media. Given my limited computing power and processing resources, this movie dataset was too large for me to be useful in making the final data network graph outputs. To further reduce the size I decided to filter the movie dataset by the year they were released. In this step I filtered the movie dataset to contain data about the movies made in 2021 & 2022."; 
var fig8_caption = "Fig #8: <i>Code to extract the nodes data from json files</i>";
var fig9_caption = "Fig #9: <i>Code to create the to nodes data files</i>";
var methodology_text7 = "From the data processing in the previous phase the datasets are finally ready to be used in building the data network graph. Finally, I used the created json files to build nodes dataset having the information about the node id, node label and node type. The node type will be either the profession of the person (i.e actor, actress, director or writer) or it could be of the type - movie.";
var fig10_caption = "Fig #10: <i>Screenshot example of code demonstrating the creation of data nodes and nodes csv file</i>";
var methodology_text8 = "Once all the nodes data was generated I converted and dumped the data into a csv file to be used later for creating the visual network graphs.";
var fig11_caption = "Fig #11: <i>Code to form edges data from nodes data</i>";
var fig12_caption = "Fig #12: <i>Code to create the to edges data  files</i>";
var methodology_text9 = "Once all the nodes were created it was now time to establish relationships amongst these nodes. Using the nodes data and the json files created in earlier steps I build a custom python data list to be used in the creation of edges dataset. This data list had data including source node id, target node id, edge type, edge weight & title type.";
var fig13_caption = "Fig #13: <i>Screenshot example of code demonstrating the creation of edges data and edges csv file</i>";
var methodology_text10 = "Once this data list was built it was then converted and dumped into a csv file for edges to be used later for creating the visual network graphs."; 

var network_graphs_text = "The nodes and edges csv datafiles created in the previous step for actors, actress, directors & writers for the movie titles for movies from 2021 to 2022 were now used to create a visual representation of these large network graphs using Gephi. I used these files to create 4 individual high definition visual representations of these network graphs having a pleasing & artsy overview look.";
var fig14_caption = "Fig #14: <i>Overview of Network Graph for relationship between actors & movies from 2021 - 2022</i>"; 
var fig15_caption = "Fig #15: <i>Overview of Network Graph for relationship between actresses & movies from 2021 - 2022</i>";
var fig16_caption = "Fig #16: <i>Overview of Network Graph showing relationship between directors & movies from 2021 - 2022</i>";
var fig17_caption = "Fig #17: <i> Overview of Network Graph showing relationship between writers & movies from 2021 - 2022</i>";

function main() {

    section_expand();

    $("#introduction-text").html(introduction_text);

    $("#dataset-text").html(dataset_text);

    $("#methodology-text1").html(methodology_text1);

    $("#methodology-text2").html(methodology_text2);

    $("#fig1-caption").html(fig1_caption);

    $("#fig2-caption").html(fig2_caption);

    $("#methodology-text3").html(methodology_text3);

    $("#fig3-caption").html(fig3_caption);

    $("#fig4-caption").html(fig4_caption);

    $("#methodology-text4").html(methodology_text4);

    $("#fig5-caption").html(fig5_caption);

    $("#methodology-text5").html(methodology_text5);

    $("#fig6-caption").html(fig6_caption);

    $("#fig7-caption").html(fig7_caption);

    $("#methodology-text6").html(methodology_text6);

    $("#fig8-caption").html(fig8_caption);

    $("#fig9-caption").html(fig9_caption);

    $("#methodology-text7").html(methodology_text7);

    $("#fig10-caption").html(fig10_caption);

    $("#methodology-text8").html(methodology_text8);

    $("#fig11-caption").html(fig11_caption);

    $("#fig12-caption").html(fig12_caption);

    $("#methodology-text9").html(methodology_text9);

    $("#fig13-caption").html(fig13_caption);

    $("#methodology-text10").html(methodology_text10);

    $("#network-graphs-text").html(network_graphs_text);

    $("#fig14-caption").html(fig14_caption);

    $("#fig15-caption").html(fig15_caption);

    $("#fig16-caption").html(fig16_caption);

    $("#fig17-caption").html(fig17_caption);

}

main();