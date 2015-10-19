<?php
/**
 * File: UserController.php
 * User: Masterplan
 * Date: 4/19/13
 * Time: 10:04 AM
 * Desc: Controller for all Admin's operations
 */

class ReportController extends Controller{

    /**
     *  @name   ReportController
     *  @descr  Creates an instance of ReportController class
     */
    public function ReportController(){}

    /**
     * @name    executeAction
     * @param   $action         String      Name of requested action
     * @descr   Executes action (if exists and if user is allowed)
     */
    public function executeAction($action){
        global $user, $log;

        // If have necessary privileges execute action
        if ($this->getAccess($user, $action, $this->accessRules())) {
            $action = 'action'.$action;
            $this->$action();
            // Else, if user is not logged bring him the to login page
        }elseif($user->role == '?'){
            header('Location: index.php?page=login');
            // Otherwise: Access denied
        }else{
            Controller::error('AccessDenied');
        }
    }

    /**
     *  @name   actionIndex
     *  @descr  Shows report index page
     */
    private function actionIndex(){
        global $engine, $user;

        $user->role = 'a';
        $_SESSION['user'] = serialize($user);

        $engine->renderDoctype();
        $engine->loadLibs();
        $engine->renderHeader();
        $engine->renderPage();
        $engine->renderFooter();
    }



    /**
     * @name   accessRules
     * @descr  Returns all access rules for User controller's actions:
     *  array(
     *     array(
     *       (allow | deny),                                     Parameter
     *       'actions' => array('*' | 'act1', ['act2', ....]),   Actions
     *       'roles'   => array('*' | '?' | 'a' | 't' | 's')     User's Role
     *     ),
     *  );
     * @return array
     */
    private function accessRules(){
        return array(
            array(
                'allow',
                'actions' => array('Index', 'Exit', 'Newteacher', 'Rooms', 'Showroominfo', 'Newroom', 'Updateroominfo',
                                   'Deleteroom','Selectlanguage', 'Language', 'Savelanguage', 'Newlanguage', 'Systemconfiguration',
                                   'Updatesystemconfiguration'
                                   ),
                'roles'   => array('a'),
            ),
            array(
                'allow',
                'actions' => array('Profile', 'Updateprofile'),
                'roles'   => array('a', 't', 's','e'),
            ),
            array(
                'allow',
                'actions' => array('Newstudent'),
                'roles'   => array('?', 'a', 't'),
            ),
            array(
                'allow',
                'actions' => array('Setpassword', 'Lostpassword'),
                'roles'   => array('?'),
            ),
            array(
                'deny',
                'actions' => array('*'),
                'roles'   => array('*'),
            ),
        );
    }
}