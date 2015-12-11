<?php
/**
 * File: index.php
 * User: Masterplan
 * Date: 3/21/13
 * Time: 8:44 PM
 * Desc: Admin's Homepage
 */

global $config, $user;

?>

<div id="navbar">
    <?php printMenu(); ?>
</div>

<div id="main">
    <div id="reportHomepage">
        <div class="clearer"></div>
        <?php
        openBox(ttReport, 'center', 'report');

        ?>

        <table id="reportTable">
            <tr><td><img src="<?=$config['themeImagesDir']?>report.png" class="img-report"/></td><td><a class="replink" href="index.php?page=report/aoreport"><?= ttAssesmentOverview ?></a></td></tr>
            <tr><td></td><td></td></tr>

        </table>

        <?php
        closeBox();
        ?>

    </div>
</div>